import {FloatingAction} from "react-native-floating-action";
import React from "react";

const AddFloatingActionButton = ({onPressItem}) => (
    <FloatingAction
        overrideWithAction
        actions={[
            {
                name: "add",
                icon: require("./img/baseline_add_white_24pt.png"),
            },
        ]}
        iconHeight={24}
        iconWidth={24}
        onPressItem={onPressItem}
    />
);

export default AddFloatingActionButton;
