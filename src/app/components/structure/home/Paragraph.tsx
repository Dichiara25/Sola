import Image from 'next/image'
import paragraphStyles from './Paragraph.module.css'
import bodyStyles from "../Body.module.css"

function Illustration(props: {image: any, alt: string}) {
    return <Image src={props.image} width={500} alt={props.alt} />
}

function Text(props: {title: string, content: string, callToAction: string, link: string,}) {
    return <div className={paragraphStyles.paragraph}>
        <h1>{props.title}</h1>
        <div className={bodyStyles.subtitle}>{props.content}</div>
        <a href={props.link} style={{margin: "50px 0"}}>
            <button>{props.callToAction}</button>
        </a>
    </div>
}

export default function Paragraph(props: {title: string, content: string, image: any, alt: string, callToAction: string, link: string, reverse: boolean}) {
    return <div className={paragraphStyles.main}>
        {props.reverse ? <>
                <Illustration image={props.image} alt={props.alt} />
                <Text title={props.title} content={props.content} callToAction={props.callToAction} link={props.link} />
            </>
            :
            <>
                <Text title={props.title} content={props.content} callToAction={props.callToAction} link={props.link} />
                <Illustration image={props.image} alt={props.alt} />
            </>
        }
    </div>
}