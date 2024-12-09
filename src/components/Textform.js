import React,{useState} from 'react'


export default function Textform(props) {
    const [text,settext]=useState("Enter the text");
    return (
        <div>
            <form>
                <div className="mb-3">
                    <h1>
                        {props.heading}
                    </h1>
                </div>
                <div className="m-3 ">
                    <label for="textarea1" className="form-label">TextArea</label>
                    <textarea className="form-control" id="textarea1"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Convert to upper case</button>
            </form>
        </div>
    )
}
