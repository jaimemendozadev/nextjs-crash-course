// @ts-nocheck
'use client';


export const FakeTodo = ({id, date, todo}) => {

    return(
        <div className="p-4 border rounded-sm">

            <p className="text-sm">
                {id}
            </p>

            <p className="text-sm">
                {date}
            </p>

            <p className="text-sm">
                {todo}
            </p>



        </div>
    )





}

// [
//     {id: "id", date: "date", todo: "todo"}

// ].map(data => <FakeTodo id={data.id} data={data.data} todo={data.todo} />)




// function FakeTodo(id, date, todo) {
//     //DO SOMETHING
// }

// FakeTodo("myId", "today", "TODO");


// <FakeTodo id={} date="date" todo="todo" />




