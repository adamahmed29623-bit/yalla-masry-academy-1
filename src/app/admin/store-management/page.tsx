'use client';
import React, { useState, useEffect } from 'react';
import { useCollection, type WithId, useFirestore, useMemoFirebase } from '@/firebase';
import { collection, addDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { PlusCircle, Edit, Trash2, type LucideProps } from 'lucide-react';
import * as icons from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';

// Dynamically create icon components
const LucideIcon = ({ name, ...props }: {name: string} & LucideProps) => {
  const Icon = icons[name as keyof typeof icons] as React.FC<LucideProps>;
  if (!Icon) return null; // Or return a default icon
  return <Icon {...props} />;
};

type Product = {
  name: string;
  description: string;
  price: number;
  nilePointsPrice?: number;
  icon: string;
};

const ProductForm = ({ product, onSave, onCancel }: { product?: WithId<Product>, onSave: (p: Product) => void, onCancel: () => void }) => {
  const [formData, setFormData] = useState<Product>({ name: '', description: '', price: 0, nilePointsPrice: 0, icon: 'Package' });

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name,
        description: product.description,
        price: product.price,
        nilePointsPrice: product.nilePointsPrice,
        icon: product.icon,
      });
    } else {
      setFormData({ name: '', description: '', price: 0, nilePointsPrice: undefined, icon: 'Package' });
    }
  }, [product]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: type === 'number' ? parseFloat(value) || 0 : value,
    }));
  };

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSave(formData); }} className="space-y-4">
      <div>
        <Label htmlFor="name">Product Name</Label>
        <Input id="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="description">Description</Label>
        <Input id="description" value={formData.description} onChange={handleChange} required />
      </div>
       <div>
        <Label htmlFor="icon">Icon Name (from Lucide)</Label>
        <Input id="icon" value={formData.icon} onChange={handleChange} placeholder="e.g., ScrollText, Ankh" required />
      </div>
      <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="price">Price ($)</Label>
            <Input id="price" type="number" value={formData.price} onChange={handleChange} required />
        </div>
        <div>
            <Label htmlFor="nilePointsPrice">Nile Points Price (Optional)</Label>
            <Input id="nilePointsPrice" type="number" value={formData.nilePointsPrice || ''} onChange={handleChange} />
        </div>
      </div>
      <DialogFooter>
        <Button type="button" variant="ghost" onClick={onCancel}>Cancel</Button>
        <Button type="submit">Save Product</Button>
      </DialogFooter>
    </form>
  );
};


export default function StoreAdminPage() {
    const firestore = useFirestore();
    const productsCollection = useMemoFirebase(() => firestore ? collection(firestore, 'products') : null, [firestore]);
    const { data: products, isLoading, error } = useCollection<Product>(productsCollection);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [editingProduct, setEditingProduct] = useState<WithId<Product> | undefined>(undefined);
    const { toast } = useToast();

    const handleSave = async (productData: Product) => {
        if (!firestore) return;
        try {
            const dataToSave = {
                ...productData,
                price: Number(productData.price) || 0,
                nilePointsPrice: productData.nilePointsPrice ? Number(productData.nilePointsPrice) : null,
            };

            if (editingProduct) {
                await updateDoc(doc(firestore, 'products', editingProduct.id), dataToSave);
                toast({ title: 'Product updated!' });
            } else {
                await addDoc(collection(firestore, 'products'), dataToSave);
                toast({ title: 'Product added!' });
            }
            setIsDialogOpen(false);
            setEditingProduct(undefined);
        } catch (e) {
            toast({ variant: 'destructive', title: 'Error saving product', description: (e as Error).message });
        }
    };

    const handleDelete = async (id: string) => {
        if (!firestore || !window.confirm('Are you sure?')) return;
        try {
            await deleteDoc(doc(firestore, 'products', id));
            toast({ title: 'Product deleted!' });
        } catch (e) {
            toast({ variant: 'destructive', title: 'Error deleting product', description: (e as Error).message });
        }
    };

    return (
        <div className="flex-1 space-y-4 p-8 pt-6">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                        <CardTitle>Store Products</CardTitle>
                        <CardDescription>Manage the items available for purchase in the store.</CardDescription>
                    </div>
                    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                        <DialogTrigger asChild>
                            <Button onClick={() => setEditingProduct(undefined)}><PlusCircle className="mr-2 h-4 w-4" /> Add Product</Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>{editingProduct ? 'Edit Product' : 'Add New Product'}</DialogTitle>
                            </DialogHeader>
                            <ProductForm product={editingProduct} onSave={handleSave} onCancel={() => { setIsDialogOpen(false); setEditingProduct(undefined); }} />
                        </DialogContent>
                    </Dialog>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Icon</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Price</TableHead>
                                <TableHead>Nile Points</TableHead>
                                <TableHead>Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {isLoading && <TableRow><TableCell colSpan={5} className="text-center">Loading...</TableCell></TableRow>}
                            {error && <TableRow><TableCell colSpan={5} className="text-center text-destructive">Error loading data.</TableCell></TableRow>}
                            {products?.map((product) => (
                                <TableRow key={product.id}>
                                    <TableCell><LucideIcon name={product.icon} className="h-6 w-6" /></TableCell>
                                    <TableCell>
                                        <p className="font-medium">{product.name}</p>
                                        <p className="text-sm text-muted-foreground">{product.description}</p>
                                    </TableCell>
                                    <TableCell>${product.price.toFixed(2)}</TableCell>
                                    <TableCell>{product.nilePointsPrice || 'N/A'}</TableCell>
                                    <TableCell className="space-x-2">
                                        <Button variant="ghost" size="icon" onClick={() => { setEditingProduct(product); setIsDialogOpen(true); }}>
                                            <Edit className="h-4 w-4" />
                                        </Button>
                                        <Button variant="ghost" size="icon" onClick={() => handleDelete(product.id)}>
                                            <Trash2 className="h-4 w-4 text-destructive" />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
