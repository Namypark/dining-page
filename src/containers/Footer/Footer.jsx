import styles from "./Footer.module.css";
import { Button, SubHeading } from "../../components";
import { BiLogoMeta, BiLogoInstagram, BiLogoTwitter } from "react-icons/bi";

const Footer = () => {
  return (
    <div className={` flex__center section__padding app__bg ${styles.footer} `}>
      <div className={styles.footer__newsletter}>
        <SubHeading title="Newletter" style={{ textAlign: "center" }} />
        <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
        <p className="p__opensans">And never miss latest Updates!</p>
        <div className={styles.footer__newsletter_email}>
          <input type="email" placeholder="Email Address" />
          <Button title="Subscribe" />
        </div>
      </div>
      <div className={styles.footer__contact_us}>
        <div className={styles.footer__contact_us_contact}>
          <h4 className={styles.headtext}>Contact Us</h4>
          <p className={styles.opensans}>
            9 W 53rd St, New York, NY 10019, USA
          </p>
          <p className={styles.opensans}>+1 212-344-1230</p>
          <p className={styles.opensans}>+1 212-344-1230</p>
        </div>
        <div className={styles.footer__contact_us_contact}>
          <h1 className="headtext__cormorant">GERÍCHT</h1>
          <div className={styles.body__text}>
            <p className="p__opensans" style={{ marginBottom: "1rem" }}>
              "The best way to find yourself is to lose yourself in the service
              of others"
            </p>
            <SubHeading />
            <div className={styles.social_logo}>
              <BiLogoMeta className={styles.social_logo_icon} />
              <BiLogoTwitter className={styles.social_logo_icon} />
              <BiLogoInstagram className={styles.social_logo_icon} />
            </div>
          </div>
        </div>

        <div className={styles.footer__contact_us_contact}>
          <h4 className={styles.headtext}>Working hours</h4>

          <p className={styles.opensans}>Monday-Friday: 08:00 am -12:00 am</p>
          <p className={styles.opensans}>Saturday-Sunday: 07:00am -11:00 pm</p>
        </div>
      </div>
      <div className={styles.date_cp_rights}>
        <p className={styles.opensans}>2021 Gerícht. All Rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
