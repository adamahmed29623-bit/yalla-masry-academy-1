"use client";
export const dynamic = 'force-dynamic'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const deployments = [
    { id: 'd1', commit: 'a1b2c3d', status: 'Success', date: '2023-11-10 14:30 UTC' },
    { id: 'd2', commit: 'e4f5g6h', status: 'Failed', date: '2023-11-09 10:15 UTC' },
    { id: 'd3', commit: 'i7j8k9l', status: 'Success', date: '2023-11-08 18:00 UTC' },
]

export default function FunctionsPage() {
    return (
        <Card>
            <CardHeader>
                <div className="flex justify-between items-center">
                    <div>
                        <CardTitle>Deployments</CardTitle>
                        <CardDescription>CI/CD pipeline for your Cloud Functions.</CardDescription>
                    </div>
                    <Button variant="outline">Connect to repository</Button>
                </div>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Commit</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Date</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {deployments.map(dep => (
                            <TableRow key={dep.id}>
                                <TableCell className="font-mono font-code">{dep.commit}</TableCell>
                                <TableCell>
                                    <Badge variant={dep.status === 'Success' ? 'secondary' : 'destructive'}>
                                        {dep.status}
                                    </Badge>
                                </TableCell>
                                <TableCell>{dep.date}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}
