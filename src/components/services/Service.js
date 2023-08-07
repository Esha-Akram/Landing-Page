import './Service.css';
import Card from '../../Shared/Card';

function Service() {
   return (
      <div id="services">
         <h2>Our Services</h2>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
         <div class="row">
            <Card icon="fa fa-code" title="Custom Software Development" desc="We design and develop 
                tailor-made software solutions to meet your unique business requirements. Our team works 
                closely with you to ensure the software aligns perfectly with your goals and processes."/>
            <Card icon="fa fa-cloud" title="Cloud Computing" desc="We offer cloud computing services to help you leverage the power of the 
            cloud. Whether you need cloud migration, infrastructure setup, or ongoing management, we have you covered." />
            <Card icon="fa fa-mobile" title="Mobile App Development" desc="Our mobile app development team creates engaging and user-friendly applications 
            for iOS and Android devices. From concept to launch, we ensure a smooth and seamless development process."/>
            <Card icon="fa fa-database" title="Database Management" desc="We provide efficient and secure database management services to 
            organize and optimize your data. Our experts ensure the integrity and reliability of your databases, enabling better decision-making."/>
            <Card icon="fa fa-cogs" title="IT Consulting" desc="Our IT consulting services help businesses make strategic technology decisions. We analyze your current setup, 
            identify areas for improvement, and provide recommendations to enhance efficiency and productivity."/>
            <Card icon="fa fa-wrench" title="Maintenance & Support" desc="We offer comprehensive maintenance and support services to keep your software running smoothly. 
            Our dedicated support team is available to address any issues and provide timely assistance."/>
         </div>
      </div>
   )
}

export default Service;