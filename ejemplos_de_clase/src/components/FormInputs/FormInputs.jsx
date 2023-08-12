import styles from "./FormInput.module.css";

const FormInput = (labelName, type, value, name) => {
    return (
        <div>
            <label>{labelName}
                <div key={value} >
                    <input className={styles.inputBox} type={type} defaultValue={value} name={name} />
                </div>
            </label>

        </div>
    )
};

const RequiredFormInput = (labelName, type, value, name) => {
    return (
        <div>
            <label>{labelName}
                <div key={value} >
                    <input className={styles.inputBox} type={type} required defaultValue={value} name={name} />
                </div>
            </label>

        </div>
    )
};

const PhoneInput = (labelName, value) => {
    return (
        <div>
            <label>{labelName}
                <div>
                    <input
                        className={styles.inputBox}
                        name="phone"
                        placeholder="+54-9-11-1234-5678"
                        type="tel"
                        pattern="+[0-9]-{2}-[0-9]{1}-[0-9]{2}-[0-9]{4}-[0-9]{4}"
                        required
                        defaultValue={value}
                    />
                </div>
            </label>

        </div>
    )
};


export { FormInput, RequiredFormInput, PhoneInput };
