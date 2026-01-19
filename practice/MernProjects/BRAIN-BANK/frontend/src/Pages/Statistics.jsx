import React from 'react'
import NavBar from '../components/NavBar'
import { LineChart, Brain , Heart, Folders,Tags,TrendingUp,Tag,FolderOpen,  Calendar, Loader2 } from 'lucide-react'
import { Badge } from "@/components/ui/badge"


import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useDispatch, useSelector } from 'react-redux'
import { getThoughtStats} from '../redux/slice/ThoughtsSlice'
import { useEffect } from 'react'
import { Button } from '../components/ui/button'
import { Progress } from "@/components/ui/progress"



const Statistics = () => {

    let dispatch = useDispatch()

    const{stats,loading} = useSelector( (state) => state.thoughts);

    // let totalThoughts = thoughts.length;

    // let favouriteCount = thoughts.filter(thought => thought.isFavourite).length;
   
    // const categoryCounts = thoughts.reduce((acc, t) => {
    // acc[t.category] = (acc[t.category] || 0) + 1;
    // return acc;
    // }, {});

    // let totalCategory = Object.keys(categoryCounts).length


    // let tagsCount = new Set(
    //     thoughts.flatMap( thought => thought.tags)
    // );

    // console.log(tagsCount)
    // let totalUniqueTags =  tagsCount.size

    useEffect(() => {
        dispatch(getThoughtStats());
     
    }, [dispatch])


    if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!stats) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No statistics available</p>
      </div>
    );
  }


  
  const statCards = [
    {
      title: 'Total Thoughts',
      value: stats.totalThoughts,
      icon: Brain,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      title: 'Favorites',
      value: stats.favouriteCount,
      icon: Heart,
      color: 'text-red-600',
      bgColor: 'bg-red-100',
    },
    {
      title: 'Categories',
      value: stats.totalCategories,
      icon: FolderOpen,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      title: 'Total Tags',
      value: stats.totalTags,
      icon: Tag,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
  ];


    const getCategoryColor = (category) => {
    const colors = {
      Idea: 'bg-purple-100 text-purple-800 border-purple-200',
      Goal: 'bg-green-100 text-green-800 border-green-200',
      Quote: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      Reminder: 'bg-red-100 text-red-800 border-red-200',
      Learning: 'bg-blue-100 text-blue-800 border-blue-200',
      Random: 'bg-gray-100 text-gray-800 border-gray-200',
    };
    return colors[category] || colors.Random;
  };

  console.log(stats)
  return (
    <div className='mt-3 mb-6 '>

        <div className='flex items-center gap-1'>
         <LineChart className='h-10 w-8'/> <h1 className="text-4xl font-bold "> Statistics</h1>
        </div>
        <p className='text-500 mt-2'>Overview of thought collection</p>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {/* Stats card */}
            {
                statCards.map( (stat, index) => {

                    let Icon = stat.icon
                    return(
                         <Card key={index}>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">
                                {stat.title}
                                </CardTitle>
                                <div className={`${stat.bgColor} p-2 rounded-lg`}>
                                <Icon className={`h-4 w-4 ${stat.color}`} />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold">{stat.value}</div>
                            </CardContent>
                        </Card>
                    )
                })
            }
          </div>





          {/* Category Breakdown */}
      <Card className="mt-10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Category Breakdown
          </CardTitle>
        </CardHeader>
        <CardContent>
          {stats.categoryBreakdown.length === 0 ? (
            <p className="text-muted-foreground">No categories yet</p>
          ) : (
            <div className="space-y-4">
              {stats.categoryBreakdown.map((category, index) => {
                const percentage = ((category.count / stats.totalThoughts) * 100).toFixed(1);
                return (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Badge className={getCategoryColor(category._id)}>
                          {category._id}
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          {category.count} thoughts
                        </span>
                      </div>
                      <span className="text-sm font-medium">{percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </CardContent>
      </Card>




          {/* All Tags */}
            <Card className="mt-10">
                <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Tag className="h-5 w-5" />
                    All Tags ({stats.allTags.length})
                </CardTitle>
                </CardHeader>
                <CardContent>
                {stats.allTags.length === 0 ? (
                    <p className="text-muted-foreground">No tags yet</p>
                ) : (
                    <div className="flex flex-wrap gap-2">
                    {stats.allTags.map((tag, index) => (
                        
                        <Badge key={index} variant="secondary">
                    #{tag}
                        </Badge>
                    ))}
                    </div>
                )}
                </CardContent>
            </Card>


            <Card className="mt-10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Quick Facts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Favorite Rate</p>
              <p className="text-2xl font-bold">
                {stats.totalThoughts > 0
                  ? ((stats.favouriteCount / stats.totalThoughts) * 100).toFixed(1)
                  : 0}%
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Average Tags per Thought</p>
              <p className="text-2xl font-bold">
                {stats.totalThoughts > 0
                  ? (stats.totalTags / stats.totalThoughts).toFixed(1)
                  : 0}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Most Used Category</p>
              <p className="text-2xl font-bold">
                {stats.categoryBreakdown.length > 0
                  ? stats.categoryBreakdown[0]._id
                  : 'None'}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Non-Favorite Thoughts</p>
              <p className="text-2xl font-bold">
                {stats.totalThoughts - stats.favouriteCount}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

        
{/* 
        <div className='flex item-center mt-10  gap-3'>
         
                <Card className="w-80">
                    <CardHeader>
                        <CardTitle className="flex item-center justify-between"><span className='text-xl font-bold'>Total Thoughts</span> <Brain/></CardTitle>
                        
                    </CardHeader>
                    <CardContent className="font-bold">
                       {loading ? "Loading Thought Count" : totalThoughts}
                    </CardContent>
                   
                </Card>

           
                <Card className="w-80">
                    <CardHeader>
                        <CardTitle className="flex item-center justify-between"><span className='text-xl font-bold'>Favourites</span> <Heart/></CardTitle>
                        
                    </CardHeader>
                    <CardContent className="font-bold">
                       {loading ? "Loading Thought Count" :favouriteCount}
                    </CardContent>
                   
                </Card>


                
                <Card className="w-80">
                    <CardHeader>
                        <CardTitle className="flex item-center justify-between"><span className='text-xl font-bold'>Categories</span> <Folders/></CardTitle>
                        
                    </CardHeader>
                    <CardContent className="font-bold">
                       {loading ? "Loading Category Count" :  totalCategory}
                    </CardContent>
                   
                </Card>


              
                <Card className="w-80">
                    <CardHeader>
                        <CardTitle className="flex item-center justify-between"><span className='text-xl font-bold'>Total Tags</span> <Tags/></CardTitle>
                        
                    </CardHeader>
                    <CardContent className="font-bold">
                       {loading ? "Loading Unique Tags Count" : totalUniqueTags}
                    </CardContent>
                   
                </Card>
        </div> */}
{/* 
        <div className="mt-10">
            
                <Card className="">
                    <CardHeader>
                        <CardTitle className="flex item-center justify-start gap-2"><TrendingUp className='mt-1'/><span className='text-xl font-bold ms-2'>Category Breakdown</span></CardTitle>
                        
                    </CardHeader>
                    <CardContent className="font-bold flex flex-col gap-2">
                        
                      {
                        breakdown.map((item) => (

                            <div key={item.category} className='flex flex-col mt-5'>
                                <div className='flex justify-between '>
                                   <div> <span>{item.category}</span><span>{item.count}</span></div>  <div>{item.percent.toFixed(2)}%</div>
                                </div>
                                <div className='mt-2'>
                                     <Progress value={item.percent} />
                                </div>
                            </div>
                        ))
                      }
                    </CardContent>
                   
                </Card>

        </div> */}

        {/* <div className="mt-10">
            
                <Card className="">
                    <CardHeader>
                        <CardTitle className="flex item-center justify-start gap-2"><Tags className='mt-1'/><span className='text-xl font-bold ms-2'>All Tags</span></CardTitle>
                        
                    </CardHeader>
                    <CardContent className="font-bold flex flex-wrap gap-2">
                        
                       {

                    
                       
                       [...tagsCount].map( (tag) => (



                        <Button key={tag} variant="outline" className="">
                            #{tag}
                        </Button>
                       ))}
                    </CardContent>
                   
                </Card>

        </div> */}
    </div>


    
  )
}

export default Statistics