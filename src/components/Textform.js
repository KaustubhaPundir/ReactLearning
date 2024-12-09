import React,{useState} from 'react'


export default function Textform(props) {
    const handleUPclick=()=>{
        settext("Upper case triggered");
    }
    const handleonchange=()=>{

    }
    const [text,settext]=useState("Enter the text");
    // text="Text"//wrong
    // settext("Text");//correct
    return (
        <div>
                <div className="mb-3">
                    <h1>
                        {props.heading}
                    </h1>
                </div>
                <div className="m-3 ">
                    <label for="textarea1" className="form-label">TextArea</label>
                    <textarea className="form-control" id="textarea1" value={text} onChange={handleonchange}></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUPclick}>Convert to upper case</button>
        </div>
    )
}
