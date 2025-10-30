import { Button, YStack } from 'tamagui';
import { supabase } from '../../utils/supabase';

export default function Login() {
  async function signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    });
  }

  return (
    <YStack flex={1} justifyContent="center" alignItems="center" space>
      <Button onPress={signInWithGoogle}>Sign in with Google</Button>
    </YStack>
  );
}
