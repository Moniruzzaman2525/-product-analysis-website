import React from 'react';

const Blogs = () => {
    return (
        <div className='container mx-auto mt-8 h-[70vh]'>
            <div>
                <h1 className='text-2xl underline font-bold'>What is a context api?</h1>
                <p className='text-xl'>React context apai is a way to effectively create global variables for a React app that can be passed around.
                    This is an alternative to prop dealing or the removal of props from grandparents to parents.Redux usability is mentioned as a simple, light way to manage the context.</p>
                <p className='text-xl'>...Create a Contex Api</p>
                <p className='text-xl'>1. Cell createCountext with a default value</p>
                <p className='text-xl'>2. Set a variable of the context with uppercase</p>
                <p className='text-xl'>3. Wrap you Child Context using RingContext .Provider</p>
                <p className='text-xl'>4. Provide a value</p>
                <p className='text-xl'>5. to consume the context from child components</p>
                <p className='text-xl'>6. useContext hook and you will you need to pass the contexName</p>
                <p className='text-xl'>2</p>
            </div>

            <div>
                <h1 className='text-2xl underline font-bold'>Semantic tag</h1>
                <p className='text-xl'>The elements whose names are meaningful are semantic elements . Example: from table aside article footer.
                    Semantic HTML elements are those that clearly define their meaning in human and machine-readable ways.
                    HTML was originally created as a markup language to describe documents on the Internet. Internet demand is increasing day by day.
                    Since the web was not initially designed to be designed, programmers use different hacks to sort things out in different ways. Instead of using <table> </table> to describe information using a table, programmers will use them to place other elements on a page.
                    Since HTML5 is still relatively new, this use of non-semantic elements is still very common on websites today. </p>
                <p className='text-2xl'><span className='font-bold'>Semantic tag in HTML:</span> article, aside, details, figcaption, figure, footer, header,main, mark,nav,secton,summary,time</p>
            </div>
        </div>
    );
};

export default Blogs;