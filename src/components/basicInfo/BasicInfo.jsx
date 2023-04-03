import React from 'react'
import styles from "./BasicInfo.module.css"
import Layout from '../../utils/layout'
import { FaBullhorn } from 'react-icons/fa'
import { TbBellRinging } from 'react-icons/tb'
import { useForm } from 'react-hook-form'

const BasicInfo = () => {
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
                    <input placeholder="Staff ID *" {...register("staffId", { required: true} )} />
                   {errors.staffId && <p style={{color:"red" }}>This field is required</p>}
                    </div>
                    <div>
                    <input  placeholder="Name * " {...register("Name", { required: true})}  />
                    {errors.Name && <p style={{color:"red" }}>This field is required</p>}
                    </div>
                    <div>
                    <input {...register("role", { required: true})} placeholder="Role * "  />
                    {errors.role && <p style={{color:"red" }}>This field is required</p>}
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
                    <input {...register("Qualification", { required: true})} placeholder="Qualification * "  />
                    {errors.Qualification && <p style={{color:"red" }}>This field is required</p>}
                    </div>
                    <div>
                    <input {...register("Experience", { required: true})} placeholder="Experience * "  />
                    {errors.Experience && <p style={{color:"red" }}>This field is required</p>}
                    </div>
                    </div>


                    <h1>Bank information</h1>
                    <div className={styles["basic-information"]} >
                    <div className={styles["form-control1"]}>
                    <input {...register("bankName", { required: true})} type="text"  placeholder="Bank Name * "  />
                    {errors.bankName && <p >This field is required</p>}
                    </div>
                    <div>
                    <input type="text" {...register("AccountNumber", { required: true})} placeholder="Bank Account Number * "  />
                    {errors.AccountNumber && <p style={{color:"red" }}>This field is required</p>}
                    </div>
                    <div>
                    <input type="text" {...register("IFSCCode", { required: true})} placeholder="IFSC Code * "  />
                    {errors.IFSCCode && <p style={{color:"red" }}>This field is required</p>}
                    </div>
                    <div>
                    <input type="text" {...register("PANNo", { required: true})} placeholder="PAN No * "  />
                    {errors.PANNo && <p style={{color:"red" }}>This field is required</p>}
                    </div>
                    </div>
                    <h1>Basic information</h1>
                    <div className={styles["basic-information"]} >
                    <div>
                    <input type="text"{...register("Address", { required: true})} placeholder="Address * " className={styles.address} />
                    {errors.Address && <p style={{color:"red" }}>This field is required</p>}
                    </div>
                    <div>
                    <input type="text" {...register("City", { required: true})} placeholder="City * "  />
                    {errors.City && <p style={{color:"red" }}>This field is required</p>}
                    </div>
                    <div>
                    <input type="text" {...register("State", { required: true})} placeholder="State * "  />
                    {errors.State && <p style={{color:"red" }}>This field is required</p>}
                    </div>
                    <div>
                    <input type="number" {...register("ZipCode", { required: true})} placeholder="Zip Code * "  />
                    {errors.ZipCode && <p style={{color:"red" }}>This field is required</p>}
                    </div>
                    <div>
                    <input type="text" {...register("Country", { required: true})} placeholder="Country * "  />
                    {errors.Country && <p style={{color:"red" }}>This field is required</p>}
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

export default BasicInfo
