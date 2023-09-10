interface CVProps {
    name: string;
    currentJob: string;
    jobHistory: string[];
}

export function CV({ name, currentJob, jobHistory }: CVProps) {
    return (
        <>
            <h1>{name}</h1>
            <p>Obecna praca: {currentJob}</p>

            <h2>Historia zatrudnienia</h2>
            {jobHistory.map((job) => (
                <p>{job}</p>
            ))}
        </>
    );
}
