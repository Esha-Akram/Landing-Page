import './Feature.css';
import Card from '../../Shared/Card';
function Feature() {
    // let data = [
    //     {
    //         title: 'effective communcation',
    //         desc: 'We prioritize clear and open communication throughout the development process to ensure your requirements are met and expectations are exceeded.',
    //         icon: 'fa fa-comment-0'
    //     },
    //     {
    //         title: 'effective communcation',
    //         desc: 'We prioritize clear and open communication throughout the development process to ensure your requirements are met and expectations are exceeded.'
    //     },
    //     {
    //         title: 'effective communcation',
    //         desc: 'We prioritize clear and open communication throughout the development process to ensure your requirements are met and expectations are exceeded.'
    //     },
    //     {
    //         title: 'effective communcation',
    //         desc: 'We prioritize clear and open communication throughout the development process to ensure your requirements are met and expectations are exceeded.'
    //     },
    // ]
    return (
        <div id="feature">
            <h2>Features</h2>
            <div class="row">
                <Card title="Effective Communication" desc="We prioritize clear and open communication throughout the development 
                    process to ensure your requirements are met and expectations are exceeded." icon="fa fa-comment-o" />
                <Card title="Scalable Solutions" desc="Our software solutions are designed to scale with your business. Whether you're a 
                        startup or an enterprise, we have the expertise to handle your growth needs." icon="fa fa-bullhorn" />
                <Card title="Collaborative Approach" desc="We believe in collaborating closely with our clients to understand their unique 
                challenges and deliver tailored solutions that align with their business goals." icon="fa fa-group" />
                <Card title="Innovative Technologies" desc="We stay up-to-date with the latest technologies and tools to provide innovative 
                software solutions that drive efficiency, productivity, and competitive advantage." icon="fa fa-magic" />
                {/* {data.map((ls) => (<Card title={ls.title} desc={ls.desc} icon={ls.icon} />))} */}
            </div>
        </div>
    )
}

export default Feature;