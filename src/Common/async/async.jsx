async function getJobs() {
    const response = await fetch('https://ab910091-a977-469c-8df1-c0f588db0d99.mock.pstmn.io/jobs');
    const data = await response.json();
    return data
}

export default getJobs