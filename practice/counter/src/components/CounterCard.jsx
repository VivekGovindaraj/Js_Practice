import React from 'react'

const CounterCard = ({
    count,
    isMilestone,
    aiMsg,
    loading,
    onInc,
    OnDec,
    OnReset,
    readOnly = false // landing page demo
}) => {
  return (
    <div>
        {count}

        <div>
            {isMilestone && (
                <p>Milestone Reached !</p>
            )}
        </div>

        {!readOnly && (
            <button>Click</button>
        )}

        {loading ? "Thinking" : aiMsg}
    </div>
  )
}
 
export default CounterCard