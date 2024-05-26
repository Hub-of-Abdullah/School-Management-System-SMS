export function adminEmailTemplate(subject, message) {
    console.log("Template", subject);
    return `
    <p>Dear Sir,</p>
    <p>${message}, Officer has applied for Car to go Head office to Dhaka Medical purpose of meeting.</p>
    <p><b>Start Time: May 25, 2024, at 11 AM</b></p><p><b>End Time: May 30, 2024, at 4 PM</b></p>
    <p>Click on the link to approve the leave: <a href="#">Leave Approval Link</a></p>
    <p><em>Note: This is a system-generated email.</em></p>
    `;
}