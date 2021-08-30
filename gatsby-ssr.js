export const onRenderBody = ({ setPostBodyComponents }) => {
setPostBodyComponents([
    <script type="text/javascript" dangerouslySetInnerHTML={{
    __html: `
        algoliasearchNetlify({
            appId: 'G0M23X5AHA',
            apiKey: 'f64ebf0353bcad837657a655e4523786',
            siteId: 'c3f13e8c-97b2-4e0f-b137-9df20f9f0153',
            branch: 'master',
            selector: 'div#search',
        });
    ` }} />
    ])
}