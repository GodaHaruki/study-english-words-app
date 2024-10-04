"use client";

import { ChangeEventHandler, ReactNode, useState } from "react";
import { grid } from "../grid";

enum StudyType {
    E2J, // english to japanese
    J2E,
}

function Radio(props: 
    {
        name: string,
        value: string|number,
        onChange: ChangeEventHandler<HTMLInputElement>,
        checked: boolean,
        children: ReactNode,
        className?: string,
        key?: string|number, 
        required?: boolean})
    {
        return (
            <label className="col-span-6 md:col-span-4 lg:col-span-3">
                <input type="radio" {...props} children={undefined} className="hidden peer">
                </input>
                <span className={`w-full h-full py-10 btn peer-checked:btn-primary ${props.className}`}>{props.children}</span>
            </label>
        )
    }

const ranges: {desc: ReactNode, value: string|number}[] = [
    {desc: "小学生", value: 0}, {desc: "中学生", value: 1}
];

export default function Study(){
    const [range, setRange] = useState<string>("");
    const [studyType, setStudyType] = useState<StudyType>(StudyType.E2J);

    return (
        <form className={grid}>
            <p className="col-span-12">出題範囲(中学生、高校生、学年など)を選んでください</p>
            {ranges.map(v => (
                <Radio 
                name="range" 
                value={v.value} 
                onChange={(evt) => setRange(evt.target.value)}
                checked={v.value == range}
                key={v.value}
                required
                >
                    {v.desc}
                </Radio>
            ))}
        
            <p className="col-start-1 col-span-12">タイプを選んでください</p>
            
            {
                [StudyType.E2J, StudyType.J2E].map(type => (
                    <Radio
                    name="studyType"
                    value={type}
                    onChange={(evt) => setStudyType(parseInt(evt.target.value))}
                    checked={type == studyType}
                    key={type}
                    required
                    >
                        {type}
                    </Radio>
                ))
            }

            <button className="col-span-12 btn btn-primary">Start</button>            
        </form>
    )
}