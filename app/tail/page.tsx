
export default function tail() {
    return (
        <div className="p-4 flex space-x-10 mt-10 ml-20 text-purple-900 text-3xl text-lg font-bold">
            <h1>Hello i am learning tailwind css from basic </h1>
            <div className="text-xl font-medium text-yellow-400 py-10">ChitChat</div>
            <p className="p-10 text-orange-700 p-40  ">I am running</p>
            
             <img className="h-60 w-40 bg-red-500 p-10 mx-auto" src="/globe.svg" alt="ChitChat Logo"/>
         <button className="py-2 px-8 bg-yellow-400 text-red-600 h-40 w-60 rounded-lg m-10 hover:bg-yellow-500 hover:text-green-700  hover:shadow-lg shadow-blue-500 ">
            Click me
        </button>


        <input type="text" placeholder="Enter your name" className="h-10 w-50 border p-2 focus:border-blue-500 focus:bg-yellow-500 focus:text-purple-500 focus:outline-none focus:ring-2 focus:ring-green-500" />
        </div>
        
    );
}