import Head from "next/head"
import Link from "next/link"
import Image from "next/image"

export default function Page() {
    return (
        <>
            <Head>
                <title>Dhanush | Year 1</title>
            </Head>
            <div class="class">
                <Image className="xiaimg" alt="class" src="/classroom.png" width={285.75} height={385.8}></Image>
                <div class="classtext">
                    My classroom, 9th D of SGV, is filled with 47 vividly different students. I was tasked with correcting the answer scripts of first unit test even before I got to teach my first class. That was like a good disclaimer for what was about to come at me everyday. My first month of teaching involved me discovering a new learning gap every day.<br></br>
                    <br></br>In the next month I started taking extra classes for 20 students who were extremely struggling. Coming from a very academically driven and competitive city like Hyderabad, it was unbelievable for me that this country has a classroom of grade 9 in which half the kids can't do subtraction, something which is usually mastered before reaching grade 5.<br></br>
                    <br></br>One major impact of these unfortunate learning gaps is that almost everything I show from their syllabus in maths goes over their heads. And the moment even a single line doesn't make sense, the class discovers their unity in creating chaos.
                </div>
            </div>
            <div class="class2">
                <div class="classtext2">
                    The semester examinations arrived before I could pull all of my class up to grade 5 level. Even though not as prominent as in my class, learning gaps existed in all the sections of the school. So the math and science fellows from all divisions decided to give a holiday homework assignment focused on important basics covered from grade 5 to grade 8. The decimals worksheet I made can be accessed <a class="here" href="https://docs.google.com/document/d/1pppDdb7qObywOtjPpCPUdfv3pEbAy2ZeZ-ICKu9kAqQ/edit?usp=sharing">here</a> and the worksheet I made for exponents can be accessed <a class="here" href="https://docs.google.com/document/d/1rythGb6jGmqGCcym0ogmaGh22aKKxh6BciLsj7GKaw8/edit?usp=sharing">here</a><br></br>
                    <br></br> I am very lucky to have a wonderful team of maths science fellows - Santosh, Misari, and Srishti, to help me every day. They often support me in my classes by maintaining discipline and also taking responsibility for half of the class during individual practice sessions. They also help me in brainstorming lesson plans and activities to make concepts engaging. My co-fellow Rishika, the class teacher of 9th D, also steps in to help me manage the class whenever she can.
                </div>
                <div class="classimg">
                    <Image alt="maths" src="/maths.png" width={252.48} height={372.48}></Image>
                </div>
                <div class="classimg">
                    <Image alt="rishika" src="/rishika.jpg" width={235.224} height={313.632}></Image>
                </div>
            </div>
            <div class="ahead">
                <div class="aheadheading">Looking Ahead</div>
                <div class="aheadcontent">
                    I have realized that these students don't have the habit of practicing what is taught in the class. I have started this semester with a great emphasis on homework. Every morning I write the questions on board before the students arrive. I ask them to copy the questions before the class starts. I then collect their homework books and correct the previous day's work and give them back before the end of the day. I am hoping this will improve their problem solving skills, speed of solving and also develop the habit of regular practice which would eventually boost their marks this semester.
                </div>
            </div>
        </>
    )
}
