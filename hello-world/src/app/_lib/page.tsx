/**
 * This component is a private route that can only be accessed programmatically.
 * If someone tries to access it directly in the browser, they will see a message
 * indicating that they cannot view this page in the browser.
 */
export default function PrivateRoute() {
    return (
        <div>
            <h2>You cannot  view this in the broswer</h2>
        </div>
    );
}