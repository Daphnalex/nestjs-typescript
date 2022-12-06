import { Injectable, NotFoundException } from '@nestjs/common';
import { Qcm } from './qcm.interface';

@Injectable()
export class QcmService {
  qcms: Qcm[] = [
    {
      id: '1',
      consigne: 'Réponds aux questions suivantes.',
      questions: [
        {
          id: '11',
          support: '',
          question: "De quelle couleur est le cheval blanc d'Henry IV ?",
          responses: [
            {
              id: '111',
              response: 'blanc',
              correct: true,
            },
            {
              id: '112',
              response: 'rouge',
              correct: false,
            },
            {
              id: '113',
              response: 'bleu',
              correct: false,
            },
            {
              id: '114',
              response: 'jaune',
              correct: false,
            },
          ],
        },
      ],
    },
  ];

  findAll(): { message: string; response: Qcm[] } {
    return {
      message: 'La liste de QCM a bien été trouvé',
      response: this.qcms,
    };
  }

  createQcm(newQcm: Qcm): {
    message: string;
    response: Qcm[];
  } {
    if (newQcm) {
      this.qcms = [...this.qcms, newQcm];
      return {
        message: 'Le nouveau QCM a bien été ajouté',
        response: this.qcms,
      };
    }
    return {
      message: "Aucun nouveau QCM n'a été trouvé",
      response: null,
    };
  }
}
