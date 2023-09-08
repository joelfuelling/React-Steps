export default function StepMessage({step, children}) {
    return (
        <>
        <p className="message">
            {/* 'chidlren' prop information created below */}
            <h3>Step {step}</h3> {children}
        </p>
        </>
    )
}