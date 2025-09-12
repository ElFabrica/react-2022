import Text from "./components/Text";
import Icon from "./components/Icon";
import TrashIcon from "./assets/icons/trash.svg?react";
import CheckIcon from "./assets/icons/check.svg?react"
import PencilIcon from "./assets/icons/pencil.svg?react"
import PlusIcon from "./assets/icons/plus.svg?react"
import SpinnerIcon from "./assets/icons/spinner.svg?react"
import XIcon from "./assets/icons/x.svg?react"
import Badge from "./components/Badge";
import Button from "./components/Button";
import ButtonIcon from "./components/Button-icon";
import InputText from "./components/Input-text";
import InputCheckbox from "./components/input-checkbox";

export default function App() {

  return (
    <div>
      <Text variant="body-md" className="text-pink-base"> Olá mundo </Text>
      <Text variant="body-md-bold" className="text-green-base"> Olá mundo </Text>
      <Text variant="body-sm-bold"> Olá mundo </Text>
      <Icon svg={TrashIcon} className="fill-pink-base"/>
      <Icon svg={CheckIcon}/>
      <Icon svg={PlusIcon}/>
      <Icon svg={ SpinnerIcon}animate />
      <Icon svg={PencilIcon} />
      <Icon svg={XIcon} />
      <div>
        <Badge variant={"secondary"}>5</Badge>
        <Badge variant={"primary"}>2 de 5</Badge>
      </div>
      
      <Button icon={PlusIcon}>
        Nada nao
      </Button>
      <div>
      <ButtonIcon icon={TrashIcon}/>
      <ButtonIcon icon={TrashIcon} variant={"secondary"}/>
      <ButtonIcon icon={TrashIcon} variant={"tertiary"}/>
      </div>
      <div>
        <InputText

        />
      </div>
      <div>
        <InputCheckbox />
      </div>
    </div>

  )
}
