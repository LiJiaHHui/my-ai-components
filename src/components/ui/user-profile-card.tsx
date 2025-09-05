import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './card';
import { Button } from './button';

/**
 * Props for the UserProfileCard component.
 */
interface UserProfileCardProps extends React.ComponentPropsWithoutRef<typeof Card> {
  /**
   * The name of the user to be displayed on the card.
   */
  name: string;
  /**
   * The email address of the user to be displayed on the card.
   */
  email: string;
  /**
   * Optional callback function to be executed when the 'View Profile' button is clicked.
   */
  onViewProfile?: () => void;
}

/**
 * A user profile card component displaying user's name, email,
 * and a button to view their profile. It's built on shadcn/ui's Card component.
 */
const UserProfileCard = React.forwardRef<HTMLDivElement, UserProfileCardProps>(
  ({ name, email, onViewProfile, className, ...props }, ref) => {
    return (
      <Card ref={ref} className={className} {...props}>
        <CardHeader>
          <CardTitle>User Profile</CardTitle>
          <CardDescription>Details of the user</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="text-sm font-medium leading-none">
            Name: <span className="font-normal text-muted-foreground">{name}</span>
          </p>
          <p className="text-sm font-medium leading-none">
            Email: <span className="font-normal text-muted-foreground">{email}</span>
          </p>
        </CardContent>
        <CardFooter>
          <Button onClick={onViewProfile}>View Profile</Button>
        </CardFooter>
      </Card>
    );
  }
);

UserProfileCard.displayName = 'UserProfileCard';

export { UserProfileCard };