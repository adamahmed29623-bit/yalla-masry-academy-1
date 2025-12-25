import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

const initialRules = `rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write: if request.auth != null;
    }
  }
}`;

export default function StoragePage() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Storage Security Rules</CardTitle>
                <CardDescription>Define access control for your Cloud Storage buckets.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <Textarea
                    defaultValue={initialRules}
                    className="font-code h-[400px] text-sm font-mono"
                    aria-label="Storage security rules editor"
                />
                <Button className="w-full md:w-auto">Publish</Button>
            </CardContent>
        </Card>
    )
}
