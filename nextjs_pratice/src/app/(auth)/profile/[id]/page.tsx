export default  function ProfilePage({params}:any) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Profile Page</h1>
            <hr />
            <p>Profile Page <span className="p-2 ml-2 rounded bg-orange-400 text-black">
                {params.id}</span>
                </p>
        </div>
    );
}