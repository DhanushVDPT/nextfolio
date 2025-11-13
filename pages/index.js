import Head from "next/head"
import Link from "next/link"
import Image from "next/image"

export default function Page() {
    return (
        <>
            <Head>
                <title>Dhanush | Home</title>
            </Head>
            <div class="aboutme">
                <div class="aboutmetext">
                    <p id="hithere">Hi there, I'm Dhanush</p>
                    <p id="hitheretext">I am a Year 2 fellow at Shree Geeta Vidyalaya, Govandi, Mumbai. I teach math and science in a class of 38 students from grade 10. Welcome to my portfolio.      </p>
                    <Image alt="scroll down" className="scrolldown" src="/scrolldown.png" width={112.5} height={75}></Image>
                </div>
                <div class="dpimg">
                    <Image alt="dhanush" className="aboutmeimage" src="/aboutme.png" width={320} height={382.5}></Image>
                </div>
            </div>
            <div class="school">
                <div class="schooltext">
                    <p id="hi">The School</p>
                    <p>Shree Geeta Vidyalaya (SGV) is a low income private school run by the Geeta Vikas Mandal. The school is a deeply congested two-story building with metal roofs. This is the second TFI intervention cycle at SGV.</p>
                </div>
                <div className="schoolphotos">
                    <Image className="sgvimg" alt="sgv" src="/sgv.png" width={585.5} height={329.5}></Image>
                    <Image className="rangoliimg" alt="sgv" src="/school.jpg" width={252} height={329.28}></Image>
                </div>
            </div>
            <div class="school">
                <div class="schooltext">
                    <p id="hi">The Community</p>
                    <p>Govandi is a community of hardworking people, many of whom are migrants who moved here in search of jobs and a better quality of life. Most of my students live within the community, just a short walking distance from the school. A significant portion of the population resides in slum areas, facing numerous challenges in their daily lives. Despite these hardships, the community remains resilient, with families striving to create better opportunities for their children through education. The community houses one of the largest dumping grounds, leading to severe environmental and health issues. Many children suffer from illnesses caused by unclean air, water, and food, resulting in frequent absences from school. Open sewage worsens the living conditions, creating an unhealthy environment for families. Additionally, issues like substance abuse, violence, and occasional murders make the area unsafe, especially for children.</p>
                </div>
                <div>
                    <Image className="govimg" alt="sgv" src="/community.jpg" width={480} height={640}></Image>
                </div>
            </div>
        </>
    )
}
