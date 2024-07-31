import './QASection.css';

const qaData = [
    {
        question: "Is it free?",
        answer: "There is a free package available, but it has some limitations, including less time for botting."
    },
    {
        question: "Will it work on my computer?",
        answer: "BotSafe integrates seamlessly with an Android emulator. The software is designed to be lightweight and efficient, ensuring smooth performance on the lowest-end computers."
    },
    {
        question: "Why is it safe?",
        answer: "BotSafe is safe because it doesn't touch the game's inner workings. Instead, we create a special bot that copies your moves to interact with the game, just like you would. This way, your character can level up whilst you sleep, safely."
    },
    {
        question: "When can I use it?",
        answer: "BotSafe is in a closed-beta currently. It is planned to be publicly released to before 2025."
    }
];

const QASection = () => {



    // Style definitions
    const styles = {
        qaSection: {
            backgroundColor: '#f5f5f5',
            color: '#333',
            padding: '4rem 2rem',
        },
        qaContainer: {
            maxWidth: '1200px',
            margin: '0 auto',
        },
        qaTitle: {
            color: '#311eaf',
            fontSize: '2.5rem',
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: '1rem',
        },
        qaSubtitle: {
            fontSize: '1.5rem',
            textAlign: 'center',
            marginBottom: '2rem',
        },
        qaGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
        },
        qaItem: {
            backgroundColor: 'white',
            borderRadius: '8px',
            padding: '1.5rem',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        },
        qaQuestion: {
            color: '#1e40af',
            fontSize: '1.25rem',
            fontWeight: '600',
            marginBottom: '0.5rem',
        },
        qaAnswer: {
            fontSize: '1rem',
        },
        qaButton: {
            display: 'block',
            width: '200px',
            margin: '2rem auto 0',
            padding: '0.75rem 1.5rem',
            backgroundColor: '#1e40af',
            color: 'white',
            textAlign: 'center',
            border: 'none',
            borderRadius: '4px',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
        },
        qaButtonHover: {
            backgroundColor: '#2563eb',
        },
        scrollTopButton: {
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            backgroundColor: '#1e40af',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '3rem',
            height: '3rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
        },
        scrollTopButtonHover: {
            backgroundColor: '#2563eb',
        }
    };

    // Render the component
    return (
        <div style={styles.qaSection}>
            <div style={styles.qaContainer}>
                <h2 style={styles.qaTitle}>Have any questions?</h2>
                <p style={styles.qaSubtitle}>
                    If you're making your first steps with this technology, please don't hesitate to join the Discord.
                </p>

                <div style={styles.qaGrid}>
                    {qaData.map((item, index) => (
                        <div key={index} style={styles.qaItem}>
                            <h4 style={styles.qaQuestion}>{item.question}</h4>
                            <p style={styles.qaAnswer}>{item.answer}</p>
                        </div>
                    ))}
                </div>

                {/*<button*/}
                {/*    style={styles.qaButton}*/}
                {/*    onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.qaButtonHover.backgroundColor}*/}
                {/*    onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.qaButton.backgroundColor}*/}
                {/*>*/}
                {/*    Read more FAQs*/}
                {/*</button>*/}
            </div>


        </div>
    );
};

export default QASection;
