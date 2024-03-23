import { Dispatch, SetStateAction } from "react"
import styles from "./Switch.module.css"

export default function Switch(
    props: {
        isOn: boolean,
        handleToggle: Dispatch<SetStateAction<boolean>>
    }) {
    return (
        <>
            <input
                checked={props.isOn}
                onChange={() => props.handleToggle(!props.isOn)}
                className={styles.checkbox}
                id={`switch`}
                type="checkbox"
                style={{marginLeft: "0", marginRight: "0"}}
            />
            <label
                className={styles.label}
                style={
                    props.isOn ? {
                        backgroundColor: "var(--second-color)"
                    }
                    :
                    {
                        backgroundColor: "var(--first-color)"
                    }
                }
                htmlFor={`switch`}
            >
                <span
                    className={styles.button}
                />
            </label>
        </>
    )
}