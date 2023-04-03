import React from 'react'
import styles from "./PersonalInfo.module.css"
import Layout from '../../utils/layout'
import { FaBullhorn } from 'react-icons/fa'
import { TbBellRinging } from 'react-icons/tb'
import { useForm } from 'react-hook-form'

const PersonalInfo = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

  return (
    <div className={styles.AppGlass} >
        <Layout />
        <div className={styles.text} >
            <div className={styles.change}>
                <h1>SmartPG Home</h1>
                <div className={styles.icon4}>
                    <div className={styles.bull}>
                        <FaBullhorn  />
                    </div>
                    <div className={styles.ring}>
                        <TbBellRinging />
                    </div>
                </div>
            </div>
            <div className={styles.container}>
            <div className={styles.basic}> 
                <form onSubmit={handleSubmit(onSubmit)}>
                   
                    <h1>Basic information</h1>
                    <div className={styles["basic-information"]}>
                    <div className={styles["form-control1"]}>
                    <input placeholder="Room No *" {...register("roomNo", { required: true} )} />
                   {errors.roomNo && <p style={{color:"red" }}>This field is required</p>}
                    </div>
                    <div>
                    <input  placeholder="Name * " {...register("Name", { required: true})}  />
                    {errors.Name && <p style={{color:"red" }}>This field is required</p>}
                    </div>
                    <div>
                    <input {...register("rent", { required: true})} placeholder="Rent * "  />
                    {errors.rent && <p style={{color:"red" }}>This field is required</p>}
                    </div>
                    <div>
                    <input {...register("gender", { required: true})} placeholder="Gender * "  />
                    {errors.gender && <p style={{color:"red" }}>This field is required</p>}
                    </div>
                    <div>
                    <input {...register("DateOfBirth", { required: true})} type="date" placeholder="Date Of Birth * "  />
                    {errors.DateOfBirth && <p style={{color:"red" }}>This field is required</p>}
                    </div>
                    <div>
                    <input {...register("mobile", { required: true})} placeholder="Mobile * "  />
                    {errors.mobile && <p style={{color:"red" }}>This field is required</p>}
                    </div>
                    <div>
                    <input {...register("JoiningDate", { required: true})} type="date" placeholder="Joining Date * "  />
                    {errors.JoiningDate  && <p style={{color:"red" }}>This field is required</p>}
                    </div>
                    <div>
                    <input {...register("Occupation", { required: true})} placeholder="occupation * "  />
                    {errors.occupation && <p style={{color:"red" }}>This field is required</p>}
                    </div>
                    
                    </div>


                    <h1>Personal information</h1>
                    <div className={styles["basic-information"]} >
                    <div className={styles["form-control1"]}>
                    <input {...register("fatherName", { required: true})} type="text"  placeholder="Father Name * "  />
                    {errors.fatherName && <p >This field is required</p>}
                    </div>
                    <div>
                    <input type="text" {...register("motherName", { required: true})} placeholder=" MotherName * "  />
                    {errors.motherName && <p style={{color:"red" }}>This field is required</p>}
                    </div>
                    <div>
                    <input type="text" {...register("tel", { required: true})} placeholder=" Tel * "  />
                    {errors.tel && <p style={{color:"red" }}>This field is required</p>}
                    </div>
                    <div>
                    <input type="text" {...register("nationality", { required: true})} placeholder="Nationality * "  />
                    {errors.nationality && <p style={{color:"red" }}>This field is required</p>}
                    </div>
                    <div>
                    <input type="text" {...register("religion", { required: true})} placeholder="Religion * "  />
                    {errors.religion && <p style={{color:"red" }}>This field is required</p>}
                    </div>
                    </div>
                    <h1>Emergency Contact</h1>
                    <h3>Primary</h3>
                    <div className={styles["basic-information"]} >
                    <div>
                    <input type="text"{...register("phone", { required: true})} placeholder="phone * " />
                    {errors.phone && <p style={{color:"red" }}>This field is required</p>}
                    </div>
                    <div>
                    <input type="text" {...register("name", { required: true})} placeholder="Name * "  />
                    {errors.name && <p style={{color:"red" }}>This field is required</p>}
                    </div>
                    <div>
                    <input type="text" {...register("Relation", { required: true})} placeholder="Relation * "  />
                    {errors.Relation && <p style={{color:"red" }}>This field is required</p>}
                    </div>
                    
                    </div>
                    <h3>Secondary</h3>
                    <div className={styles["basic-information"]} >
                    <div>
                    <input type="text"{...register("phone", { required: true})} placeholder="phone * " />
                    {errors.phone && <p style={{color:"red" }}>This field is required</p>}
                    </div>
                    <div>
                    <input type="text" {...register("name", { required: true})} placeholder="Name * "  />
                    {errors.name && <p style={{color:"red" }}>This field is required</p>}
                    </div>
                    <div>
                    <input type="text" {...register("Relation", { required: true})} placeholder="Relation * "  />
                    {errors.Relation && <p style={{color:"red" }}>This field is required</p>}
                    </div>
                    
                    </div>
                    <p><input type="submit" className={styles["form-control"]}  /></p>
                </form>



             
            </div>

            </div>
        </div>
    </div>
  )
}

export default PersonalInfo