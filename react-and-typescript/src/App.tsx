import { CV } from "./CV";
function App() {
    const name = "Kacper";
    const currentJob = "Jak zacząć programować?";
    const jobHistory = ["Hotjar", "Codewise"];
    return (
        <CV name={name} jobHistory={jobHistory} currentJob={currentJob}></CV>
    );
}

export default App;
