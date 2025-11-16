import Head from "next/head"
import Link from "next/link"
import Image from "next/image"

export default function Page() {
    return (
        <>
            <Head>
                <title>Dhanush | Year 2</title>
            </Head>
            <div className="g10">
                <p className="gx">GRADE X</p>
                <div className="g10content">
                    <p className="g10text">
                        My Grade 10 classroom — a space filled with curiosity, collaboration, and the determination to grow a little more every day. Here, students are encouraged to think boldly, ask questions freely, and support one another as they navigate one of the most important years of their school journey. This classroom is built on respect, kindness, and the belief that every student has something unique to offer. Whether we are tackling challenging concepts, celebrating small victories, or learning through lively discussions, the goal remains the same: to help each learner discover confidence in their abilities.
                    </p>
                    <Image className="ethan" alt="MI" src="/mission.gif" width={400} height={168}></Image>
                </div>
                <div className="g10content">
                    <p className="g10text">
                        In my class, X D, there are 38 students. Unfortunately, 9 students from Grade 9 were unable to pass. Among the students who did pass, 14 were granted grace marks. My primary objective, as I see it, is straightforward:
                    </p>
                    <p id="ssc">
                        "To ensure that 20 students of grade 5 rigour successfully complete their SSC examinations"
                    </p>
                    <Image className="ethan" alt="MI" src="/mission.gif" width={400} height={168}></Image>
                </div>
            </div>

            <div className="g10">
                <p className="gx">GRIND</p>
                <div className="g10content">
                    <p className="g10text">
                        I follow a highly rigorous schedule to ensure consistent support for my students. My day begins at 4:30 a.m., and I arrive at school by 6:30 a.m. I teach through 12:15 p.m., followed by an additional LoR support session until 2:00 p.m., and a HoR session until 4:00 p.m. To further enhance learning, I developed a comprehensive <a class="here" target="#" href="https://sgv9.vercel.app/">class website</a> that provides students with centralized access to all instructional materials, including lesson plans, class notes, homework, textbooks, digests, 21 sets, previous years' papers, and other essential resources.
                    </p>
                    <Image className="ethan" alt="MI" src="/APtabs.png" width={1114} height={572}></Image>
                    <p className="g10text">
                        I have adopted a new approach to designing each lesson plan by first compiling all previous years' questions related to that chapter. Using this, I analyze and determine the weightage of each topic, which helps me eliminate non-essential content and structure the chapter more effectively. I then categorize all available questions from the chapter into LoR, MoR, and HoR levels to support targeted practice sessions. An example of this process, applied to the Linear Equations chapter, is provided <a class="here" target="#" href="https://docs.google.com/document/d/13kaE6fCfqX822gPxqzgHYWA7cn-Ddc7cZI_Ho1NU4Ck/edit?tab=t.0">here</a>.
                    </p>
                    <Image className="ethan" alt="MI" src="/captainamerica.gif" width={498} height={208}></Image>
                </div>
            </div>
            
            <div className="g10">
                <p className="gx">THE NUMBERS</p>
                <div className="g10content">
                    <Image className="ethan" alt="MI" src="/data.png" width={821} height={489}></Image>
                    <p className="g10text">
                        Compared to last year, the students have shown significant academic improvement. Their understanding of core concepts has deepened, their problem-solving skills have become more accurate and efficient, and their engagement during lessons has increased noticeably. Many students who previously struggled with certain topics are now showing consistent progress and stronger performance. This collective improvement reflects their hard work and growing confidence in their academic abilities.
                    </p>
                    <Image className="ethan" alt="MI" src="/haikyuu-dance-niku-niku.gif" width={498} height={281}></Image>
                </div>
            </div>
            
            <div className="g10">
                <p className="gx">ONE BATTLE AFTER ANOTHER</p>
                <div className="g10content">
                    <p className="g10text">
                        Even with the noticeable improvement, our daily sessions often reveal new learning gaps rooted in primary-grade concepts. The journey toward the final exam is filled with ups and downs, and these gaps can feel like unexpected obstacles along the way. Nevertheless, each challenge helps me better understand what the students need and how I can support them more effectively.
                    </p>
                    <Image className="ethan" alt="MI" src="/one-battle-after-another-movie-title.gif" width={360} height={360}></Image>
                </div>
            </div>
            
            <div className="g10">
                <p className="gx">THE LAST HOPE</p>
                <div id="musharratcontent" className="g10content">
                    <p className="g10text">
                        After my first year, when I felt overwhelmed and uncertain about my work, my new Program Manager, Musharrat, provided invaluable support and helped me regain clarity and confidence. Her leadership and the way she addressed our school team in her very first meeting were incredibly uplifting. She reinforced my belief in the value of my work and reminded me that my efforts truly matter.
                    </p>
                    <Image className="musharrat" alt="MI" src="/musharratcrop.jpg" width={650} height={969}></Image>
                    <p className="g10text">
                        I first met her at the institute, where she was the first person to encourage me in this fellowship. She recognized my effort and presented me with the “Best Lesson Plan” award for reading comprehension, a gesture that greatly motivated me. I also witnessed her generosity early on when she shared all of her beautifully crafted classroom charts with the rest of us. <br></br>
                        Her ability to understand my thoughts even before I fully express them often feels intuitive, almost as if she can anticipate what I am trying to say. In addition to her interpersonal strengths, she possesses deep subject-matter expertise across all SSC disciplines. She has a clear grasp of what is essential for success in SSC and provides guidance that is both strategic and practical. I genuinely cannot imagine navigating this school year without her guidance and encouragement.
                    </p>
                </div>
                <div className="g10content">
                    <Image className="ethan" alt="MI" src="/captainamerica.gif" width={498} height={208}></Image>
                    <p className="g10text">
                        A student's family generously offered me the use of a room in their home for daily after-school sessions, including weekends. This dedicated space has enabled me to provide more individualized support and to address each student's specific learning needs with greater focus. I am sincerely grateful to Harsh and his family for their hospitality and consistent support.
                        These after-school sessions have become something students look forward to—not only because of the increased personal attention they receive, but also because they can unwind together with a short game of cards or Jenga once the academic work is complete.
                    </p>
                </div>
            </div>
        </>
    )
}
