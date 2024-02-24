import styles from './Paragraph.module.css'

export default function Paragraph(props: {title: string, content: string}) {
    return <div className={styles.main}>
        <div>
            Hello
        </div>
        <div className={styles.paragraph}>
            <h1>{props.title}</h1>
            <div>{props.content}</div>
        </div>
    </div>
}