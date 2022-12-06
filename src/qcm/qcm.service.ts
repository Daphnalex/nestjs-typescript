import { Injectable } from '@nestjs/common';
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
            },
            {
              id: '112',
              response: 'rouge',
            },
            {
              id: '113',
              response: 'bleu',
            },
            {
              id: '114',
              response: 'jaune',
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
}
