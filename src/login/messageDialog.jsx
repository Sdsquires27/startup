import React from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export function MessageDialog(properties) {
  return (
    <Modal {...properties} show={properties.message} centered>
      <Modal.Body>{properties.message}</Modal.Body>
      <Modal.Footer>
        <Button onClick={properties.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
