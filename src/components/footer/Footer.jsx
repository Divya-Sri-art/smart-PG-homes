import React from "react";
import styles from './Footer.module.css'

const Footer = () => {
return (
	<div className={styles.Box}>
	< div className={styles.Container}>
		<div className={styles.Row}>
		<div className={styles.Column}>
			<h4 className={styles.Heading}>About Us</h4>
			<a href="/#" className={styles.FooterLink}>Team</a>
			<a href="/#" className={styles.FooterLink}>Investor Relations</a>
			<a href="/#" className={styles.FooterLink}>Media</a>
		</div>
		<div className={styles.Column}>
			<h4 className={styles.Heading}>Blogs</h4>
			<a href="/#" className={styles.FooterLink}>FAQs</a>
			<a href="/#" className={styles.FooterLink}>Refer and Earn</a>
			<a href="/#" className={styles.FooterLink}>House Rules</a>
		</div>
		<div className={styles.Column}>
			<h4 className={styles.Heading}>T&C</h4>
			<a href="/#" className={styles.FooterLink}>Privacy Policy</a>
			<a href="/#" className={styles.FooterLink}>Careers</a>
			<a href="/#" className={styles.FooterLink}>Contact Us</a>
		</div>
		<div className={styles.Column}>
			<h4 className={styles.Heading}>COVID-19</h4>
			<a href="/#" className={styles.FooterLink}>Refunds</a>
			<a href="/#" className={styles.FooterLink}>Careers</a>
			<a href="/#" className={styles.FooterLink}>Partner With Us</a>
		</div>
		</div>
	</div>
	</div>
);
};
export default Footer;
