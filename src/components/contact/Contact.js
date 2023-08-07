import './Contact.css';

function Contact() {
    return (
        <form id="contact">
            <h2>Get In Touch</h2>
            <div class="row">
                <div class="col-8">
                    <p>Please fill out the form below to send us an email and we will get back to you as soon aspossible.</p>
                    <input class="form-control" id="name" type="text" placeholder="Name" required="required" />
                    <input class="form-control" id="email" type="email" placeholder="Email" required="required" />
                    <div>
                        <textarea class="form-control" id="message" placeholder="Message" required="required"></textarea>
                    </div>
                    <button type="submit" class="btn-form">Send Message</button>
                </div>
                <div class="col-3">
                    <h3 class="info">Contact Info</h3>
                    <div class="content">
                        <h3><i class="fa fa-map-marker"></i> Address</h3>
                        <p>123 Main St, Anytown, USA</p>
                        <h3><i class="fa fa-phone"></i> Phone</h3>
                        <p>+1 123 456 7890</p>
                        <h3><i class="fa fa-envelope"></i> Email</h3>
                        <p> info@Cyber.com</p>
                    </div>

                </div>
            </div>
            <hr></hr>
            <div class="social-row">
                <a class="btn-social" href="#!" ><i class="fa fa-facebook"></i></a>
                <a class="btn-social" href="#!" > <i class="fa fa-twitter"></i></a>
                <a class="btn-social" href="#!"><i class="fa fa-youtube"></i></a>
            </div>

        </form>
    )
}
export default Contact;