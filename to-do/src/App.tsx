import Text from "./components/Text";

export default function App() {

  return (
    <div>
      <Text variant="body-md" className="text-pink-base"> Olá mundo </Text>
      <Text variant="body-md-bold" className="text-green-base"> Olá mundo </Text>
      <Text variant="body-sm-bold"> Olá mundo </Text>
    </div>

  )
}
