import styles from "../style/header.module.css"

const Navbar=()=>{
    return(

        <div className={styles.menubar}>
            <ul>
                <li>
                    <a href="">HOME</a>

                </li>
                <li>
                    <a href="">ABOUT US</a>
                    
                    <div className={styles.menubar1}>
                        <ul>
                            <li><a href="">About Us</a></li>
                            <li><a href="">Affiliation</a></li>
                            <li> <a href="">Vision and Mission</a>
                            </li>
                            <li><a href="">Faculties Cell</a></li>
                            <li><a href="">Placement & Internship Cell</a></li>
                            <li><a href="">NCETIR Autonomous Board</a></li>
                        </ul>
                    </div>


                </li>
                <li><a href="">PROGRAMES </a>
                <div className={styles.menubar1}>
                        <ul>
                            <li><a href="">Aeronautics</a></li>
                            <li><a href="">Automobile</a></li>
                            <li> <a href="">Department of Agriculture</a>
                            </li>
                            <li><a href="">Department of Apparel</a></li>
                            <li><a href="">Department of Banking</a></li>
                            <li><a href="">Department of Beauty & Faculty of Wellness</a></li>
                            <li><a href="">Department of Engineering</a></li>
                            <li><a href="">Department of Fire Safety</a></li>
                            <li> <a href="">Department of IT and Computer</a>
                            </li>
                            <li><a href="">Department of Nursery teacher training (NTT)</a></li>
                            <li><a href="">Department of Paramedical & Health Science</a></li>
                            <li><a href="">Department of Skill Development</a></li>
                            <li><a href="">Department of Veterinary</a></li>
                            <li><a href="">Department of Vocational</a></li>
                            <li><a href="">Department of Yoga & Naturopathy</a></li>
                            <li><a href="">testProgram</a></li>
                        </ul>
                    </div>

                </li>
                <li><a href="">CENTERS</a></li>
                <li><a href="">RESULT</a></li>
                <li><a href="">LATEST UPDATES</a></li>
                <li><a href="">GALLERY</a></li>
                <li><a href="">DOWNLOADS</a></li>
                <li><a href="">CONTACT</a></li>
            </ul>
        </div>


    )
}
export default Navbar