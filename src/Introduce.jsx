import react from 'react'
import styles from "./intro.module.css";

const Introduce = () => {

    return (
        <>
            <div className={`container-fluid ${styles.cont}`} >
                <div className="row">
                    <h1> Introduce Our Projects</h1>
                </div>
                <div className="row" >
                    <p className={styles.para}> Software development outsourcing is just a tool to achieve business goals. But there is no way to get worthwhile results without cooperation and trust
                        between a client company.
                    </p>
                </div>
                <div className={`container-fluid ${styles.continner}`}>

                    <div className="row ">

                        <div className={` col-sm-12 col-md-4 col-lg-4 ${styles.cards}`}>

                            <img src="images/Full_.png" alt=" image" className={styles.imag} srcset="" />
                            <h3>Felix Delight</h3>
                            <p>Mobile App</p>



                        </div>

                        <div className={` col-sm-12 col-md-4 col-lg-4 ${styles.cards}`}>
                            <img src="images/mokup2.png" alt=" image" className={styles.imag} srcset="" />
                            <h3>Felix Delight</h3>
                            <p>Mobile App</p>



                        </div>

                        <div className={`col-sm-12 col-md-4 col-lg-4 ${styles.cards}`}>


                            <img src="images/mokup2.png" alt=" image" className= {styles.imag} srcset="" />
                            <h3>Felix Delight</h3>
                            <p>Mobile App</p>



                        </div>



                    </div>

                </div>


            </div>


        </>


    )
}
export default Introduce;