import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RulesEditor } from "@/components/firestore/rules-editor"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

function DataBrowser() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Data Browser</CardTitle>
                <CardDescription>Visualize and manage your Firestore data.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-center text-muted-foreground py-12">Data browser UI coming soon.</p>
            </CardContent>
        </Card>
    )
}

function IndexesManager() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Indexes</CardTitle>
                <CardDescription>Manage your Firestore query indexes.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Collection</TableHead>
                            <TableHead>Fields</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>users</TableCell>
                            <TableCell><code className="font-code">(isAdmin: Ascending)</code></TableCell>
                            <TableCell>Single-field</TableCell>
                            <TableCell>Enabled</TableCell>
                        </TableRow>
                         <TableRow>
                            <TableCell>posts</TableCell>
                            <TableCell><code className="font-code">(authorId: Ascending, createdAt: Descending)</code></TableCell>
                            <TableCell>Composite</TableCell>
                            <TableCell>Enabled</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}

export default function FirestorePage() {
    return (
        <Tabs defaultValue="rules" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="data">Data</TabsTrigger>
                <TabsTrigger value="rules">Rules</TabsTrigger>
                <TabsTrigger value="indexes">Indexes</TabsTrigger>
            </TabsList>
            <TabsContent value="data" className="mt-6">
                <DataBrowser />
            </TabsContent>
            <TabsContent value="rules" className="mt-6">
                <RulesEditor />
            </TabsContent>
            <TabsContent value="indexes" className="mt-6">
                <IndexesManager />
            </TabsContent>
        </Tabs>
    )
}
