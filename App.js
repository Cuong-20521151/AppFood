import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './screens/AuthContext';
import Main from './screens/TabStack';

export default function App() {
return(
    <AuthProvider>
        <NavigationContainer>
            <Main />
        </NavigationContainer>
    </AuthProvider>

)}