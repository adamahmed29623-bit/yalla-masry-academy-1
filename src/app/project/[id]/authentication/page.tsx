"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { useFirebase } from "@/firebase"
import { Loader2 } from "lucide-react"

const availableProviders = [
    { id: 'password', name: 'Email/Password' },
    { id: 'google.com', name: 'Google' },
    { id: 'facebook.com', name: 'Facebook' },
    { id: 'github.com', name: 'GitHub' },
    { id: 'anonymous', name: 'Anonymous' },
]

export default function AuthenticationPage() {
    const { auth, isUserLoading } = useFirebase();

    if (isUserLoading) {
        return <div className="flex justify-center items-center"><Loader2 className="h-8 w-8 animate-spin" /></div>;
    }
    
    // This is a placeholder. In a real app you would get the enabled providers from your backend or config.
    const enabledProviders = ['password', 'anonymous', 'google.com'];

    return (
        <div className="space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle>Sign-in method</CardTitle>
                    <CardDescription>Configure authentication providers for your users.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {availableProviders.map(provider => (
                            <div key={provider.id} className="flex items-center justify-between rounded-lg border p-4">
                                <span className="font-medium">{provider.name}</span>
                                <Switch 
                                    checked={enabledProviders.includes(provider.id)} 
                                    aria-label={`Enable ${provider.name}`} 
                                    // In a real app, you would have an onClick handler to update the config
                                />
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Users</CardTitle>
                    <CardDescription>User management requires Admin privileges and is coming soon.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-center text-muted-foreground py-12">
                        Displaying and managing the full user list is not available on the client-side for security reasons.
                    </p>
                </CardContent>
            </Card>
        </div>
    )
}
