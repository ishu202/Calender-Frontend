import React from "react";

const Form = ({children}) => {
    return (
        <>
            <form action={`${window.location.href}`} method="POST">
                {children}
            </form>
        </>
    );
}

export default Form;
