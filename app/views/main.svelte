<page actionBarHidden="true">
    
    <stackLayout class="page ns-light p-4" height="100%">

        <label textWrap="true" class="text-md mt-4" text="this is just a test" />
        
    </stackLayout>
</page>

<script>
    import { onMount } from 'svelte'
    import { firebase } from '@nativescript/firebase-core';
    import '@nativescript/firebase-crashlytics'; // only needs to be imported 1x
    import '@nativescript/firebase-messaging';

    onMount(async ()=>{
        try {
            firebase().initializeApp();
            const crashlytics = firebase().crashlytics();
            const messaging = firebase().messaging();
    
            const authStatus = await messaging.requestPermission({
    			ios: {
    				alert: true,
    			},
    		});
            const enabled = authStatus === messaging.AuthorizationStatus.AUTHORIZED || authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    
            if (enabled) {
                messaging.onToken(async token => {
                    console.log('[Firebase] onTokenRefresh:', { token });
                });
                messaging.onMessage(async (message) => {
                    console.log('[Firebase] onMessage:', { message });
                });
            }
        } catch (err) {
            console.log('[Firebase] Error:', err);
        }
    })

</script>
