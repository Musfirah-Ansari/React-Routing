const Aboutcomp = () => {
    return (
        <>
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                <h1 style={{ fontSize: '2.5rem', color: '#333', fontWeight: '600' }}>
                    About Us
                </h1>
                <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: 'auto', color: '#666', lineHeight: '1.6' }}>
                    We are a passionate team dedicated to delivering great products and providing outstanding services.
                    Our goal is to make life easier, more enjoyable, and more connected for our customers.
                    Here's a little bit about who we are and what we do.
                </p>
            </div>

            <section style={{ padding: '40px 20px' }}>
                <h2 style={{ fontSize: '2rem', color: '#444', textAlign: 'center' }}>Our Story</h2>
                <p style={{ fontSize: '1.1rem', maxWidth: '900px', margin: 'auto', textAlign: 'center', lineHeight: '1.7' }}>
                    Founded with a simple mission in mind: to create better solutions that serve people’s needs.
                    What started as a small idea has grown into a dedicated team of individuals who share a common goal:
                    to improve the lives of our users through innovation, quality, and commitment.
                    We believe in the power of collaboration and always strive to exceed expectations.
                </p>
            </section>

            <section style={{ backgroundColor: '#f9f9f9', padding: '40px 20px' }}>
                <h2 style={{ fontSize: '2rem', color: '#444', textAlign: 'center' }}>What We Do</h2>
                <p style={{ fontSize: '1.1rem', maxWidth: '900px', margin: 'auto', textAlign: 'center', lineHeight: '1.7' }}>
                    Our products are designed to help you achieve more with less effort. Whether it’s simplifying tasks,
                    improving communication, or offering innovative tools to enhance productivity,
                    we aim to make things easier for you.
                    We believe that by making everyday challenges simpler, we can make your day-to-day experience better.
                </p>
            </section>

            <section style={{ padding: '40px 20px' }}>
                <h2 style={{ fontSize: '2rem', color: '#444', textAlign: 'center' }}>Meet Our Team</h2>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginTop: '30px' }}>
                    <div style={{ textAlign: 'center' }}>
                        <img
                            src="https://via.placeholder.com/150/87CEEB/FFFFFF?text=Team+Member"
                            alt="Team Member 1"
                            style={{ borderRadius: '50%', width: '150px', height: '150px', objectFit: 'cover', marginBottom: '10px' }}
                        />
                        <p style={{ fontSize: '1rem', color: '#333' }}>Musfirah 1</p>
                        <p style={{ fontSize: '0.9rem', color: '#888' }}>Team Member</p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <img
                            src="https://via.placeholder.com/150/87CEEB/FFFFFF?text=Team+Member"
                            alt="Team Member 2"
                            style={{ borderRadius: '50%', width: '150px', height: '150px', objectFit: 'cover', marginBottom: '10px' }}
                        />
                        <p style={{ fontSize: '1rem', color: '#333' }}>Musfirah 2</p>
                        <p style={{ fontSize: '0.9rem', color: '#888' }}>Team Member</p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <img
                            src="https://via.placeholder.com/150/87CEEB/FFFFFF?text=Team+Member"
                            alt="Team Member 3"
                            style={{ borderRadius: '50%', width: '150px', height: '150px', objectFit: 'cover', marginBottom: '10px' }}
                        />
                        <p style={{ fontSize: '1rem', color: '#333' }}>Musfirah 3</p>
                        <p style={{ fontSize: '0.9rem', color: '#888' }}>Team Member</p>
                    </div>
                </div>
            </section>

            <div style={{ textAlign: 'center', padding: '40px 20px', backgroundColor: '#f7f7f7' }}>
                <h3 style={{ fontSize: '2rem', color: '#333' }}>Join Us on Our Journey</h3>
                <p style={{ fontSize: '1rem', maxWidth: '800px', margin: 'auto', lineHeight: '1.8', color: '#666' }}>
                    We’re excited to have you with us. Whether you’re a customer, a partner, or someone looking to learn more,
                    we invite you to connect with us. Together, we can achieve great things.
                    Let's work together to bring meaningful change and make a lasting impact.
                </p>
            </div>
        </>
    );
};

export default Aboutcomp;