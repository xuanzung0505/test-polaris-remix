import { Modal, TitleBar, useAppBridge } from "@shopify/app-bridge-react";
import { Popover, Icon } from "@shopify/polaris";
import React, { useCallback, useState } from "react";
import { AirplaneIcon } from "@shopify/polaris-icons";
import { Popper, Box } from "@mui/material";

function Draft() {
  const shopify = useAppBridge();
  const [popoverActive, setPopoverActive] = useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const togglePopoverActive = useCallback(() => {
    setPopoverActive((val) => !val);
  }, []);

  const activator = (
    <div
      className="Avada-Faqs_Text-Style__Activator"
      onClick={togglePopoverActive}
    >
      <Icon source={AirplaneIcon} tone="#4A4A4A" />
    </div>
  );

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <>
      <button onClick={() => shopify.modal.show("my-modal")}>Open Modal</button>
      <Modal id="my-modal">
        <p>Message</p>
        <TitleBar title="Title">
          <button variant="primary">Label</button>
          <button onClick={() => shopify.modal.hide("my-modal")}>Label</button>
        </TitleBar>
        {/* <div style={{ height: "200px" }}></div> */}
        <Popover
          active={popoverActive}
          activator={activator}
          onClose={togglePopoverActive}
        >
          <Popover.Pane>
            <div className="Avada-Faq_Insert-Container">
              <div>hehe</div>
            </div>
          </Popover.Pane>
        </Popover>

        <button aria-describedby={id} type="button" onClick={handleClick}>
          Toggle Popper
        </button>
        <Popper id={id} open={open} anchorEl={anchorEl} placement="top">
          <Box sx={{ border: 1, p: 1, bgcolor: "background.paper" }}>
            The content of the Popper.<div>hehe</div>
            <div>hehe</div>
            <div>hehe</div>
            <div>hehe</div>
            <div>hehe</div>
          </Box>
        </Popper>
      </Modal>
    </>
  );
}

export default Draft;
