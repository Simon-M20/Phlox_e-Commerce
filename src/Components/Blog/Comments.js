const Comments = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

        alert("Sending pruck pruck prack");
    };
    return (
        <section className='md:w-3/4 mx-auto w-full md:px-0 px-2'>
            <h4 className='text-xl font-semibold'>Leave a comment</h4>
            <p className='py-2'>
                Your email address will not be published. Required fields are
                marked *
            </p>
            <form className='w-full mt-6 mb-16' onSubmit={handleSubmit}>
                <div className='flex items-center w-full md:justify-between justify-center'>
                    <input
                        type='text'
                        placeholder='Email'
                        className='md:w-1/2 border rounded-full py-3 pl-7 mr-4 focus:outline-none'
                        style={{
                            backgroundColor: "transparent",
                            backgroundImage:
                                "linear-gradient(-105deg, #dcdcdc 54%, #eee 68%)",
                        }}
                    />
                    <input
                        type='text'
                        placeholder='Web'
                        className='md:w-1/2 border rounded-full py-3 pl-7 ml-4 focus:outline-none'
                        style={{
                            backgroundColor: "transparent",
                            backgroundImage:
                                "linear-gradient(-105deg, #dcdcdc 54%, #eee 68%)",
                        }}
                    />
                </div>
                <textarea
                    rows='10'
                    placeholder='Comments'
                    className='w-full rounded-2xl px-7 py-6 border focus:outline-none mt-8'
                    style={{
                        resize: "none",
                        backgroundColor: "transparent",
                        backgroundImage:
                            "linear-gradient(-105deg, #dcdcdc 54%, #eee 68%)",
                    }}></textarea>
                <div className='flex justify-end items-center w-full'>
                    <button className='aboutBtn mr-4'>
                        <span className='aboutBtn-overlay'></span>
                        <span>Submit</span>
                    </button>
                </div>
            </form>
        </section>
    );
};

export default Comments;
