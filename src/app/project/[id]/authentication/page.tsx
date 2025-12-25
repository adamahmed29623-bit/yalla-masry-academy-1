import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Switch } from "@/components/ui/switch"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { mockUsers } from "@/lib/data"
import { MoreHorizontal, PlusCircle } from "lucide-react"

const providers = [
    { name: 'Email/Password', enabled: true },
    { name: 'Google', enabled: true },
    { name: 'Facebook', enabled: false },
    { name: 'GitHub', enabled: false },
    { name: 'Anonymous', enabled: true },
]

export default function AuthenticationPage() {
    return (
        <div className="space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle>Sign-in method</CardTitle>
                    <CardDescription>Configure authentication providers for your users.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {providers.map(provider => (
                            <div key={provider.name} className="flex items-center justify-between rounded-lg border p-4">
                                <span className="font-medium">{provider.name}</span>
                                <Switch defaultChecked={provider.enabled} aria-label={`Enable ${provider.name}`} />
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <div className="flex justify-between items-center">
                        <div>
                            <CardTitle>Users</CardTitle>
                            <CardDescription>Manage users who have signed up for your application.</CardDescription>
                        </div>
                        <Button>
                            <PlusCircle className="mr-2 h-4 w-4" /> Add user
                        </Button>
                    </div>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Email</TableHead>
                                <TableHead>Provider</TableHead>
                                <TableHead>Created at</TableHead>
                                <TableHead>Last signed in</TableHead>
                                <TableHead><span className="sr-only">Actions</span></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {mockUsers.map(user => (
                                <TableRow key={user.id}>
                                    <TableCell className="font-medium">{user.email}</TableCell>
                                    <TableCell><Badge variant="outline">{user.provider}</Badge></TableCell>
                                    <TableCell>{user.createdAt}</TableCell>
                                    <TableCell>{user.lastSignedIn}</TableCell>
                                    <TableCell>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" className="h-8 w-8 p-0">
                                                    <span className="sr-only">Open menu</span>
                                                    <MoreHorizontal className="h-4 w-4" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuItem>Reset password</DropdownMenuItem>
                                                <DropdownMenuItem>Disable user</DropdownMenuItem>
                                                <DropdownMenuItem className="text-destructive focus:bg-destructive/10 focus:text-destructive">Delete user</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}
