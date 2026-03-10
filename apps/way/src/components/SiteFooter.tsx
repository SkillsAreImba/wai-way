'use client';

import { useTranslation } from '@donotdev/core';
import { Link } from '@donotdev/ui';
import { Section, Stack, Text } from '@donotdev/components';
import { Github, ExternalLink, Shield, FileText, Building, Briefcase, GraduationCap, Code } from 'lucide-react';

const NAMESPACE = 'footer';
const year = new Date().getFullYear();

export default function SiteFooter() {
  const { t } = useTranslation(NAMESPACE);

  return (
    <Section separator gridCols={[1, 1, 3, 3]} align="start" textAlign="start">
      <Stack>
        <Text level="caption">{t('headings.product')}</Text>
        <Text level="caption">
          <Link path="https://ambroise-park.com/services/transformation" target="_blank" icon={<Briefcase size={12} />} iconEnd>
            {t('links.consulting')}
          </Link>
        </Text>
        <Text level="caption">
          <Link path="https://ambroise-park.com/services/kickstart" target="_blank" icon={<GraduationCap size={12} />} iconEnd>
            {t('links.training')}
          </Link>
        </Text>
        <Text level="caption">
          <Link path="https://ambroise-park.com/services/dev" target="_blank" icon={<Code size={12} />} iconEnd>
            {t('links.customDev')}
          </Link>
        </Text>
      </Stack>

      <Stack>
        <Text level="caption">{t('headings.resources')}</Text>
        <Text level="caption">
          <Link path="https://donotdev.com" target="_blank" icon={<ExternalLink size={12} />} iconEnd>
            {t('links.framework')}
          </Link>
        </Text>
        <Text level="caption">
          <Link path="https://github.com/DoNotDev/cli" target="_blank" icon={<Github size={12} />} iconEnd>
            {t('links.github')}
          </Link>
        </Text>
      </Stack>

      <Stack>
        <Text level="caption">{t('headings.legal')}</Text>
        <Text level="caption">
          <Link path="/legal/privacy" icon={<Shield size={12} />} iconEnd>
            {t('links.privacy')}
          </Link>
        </Text>
        <Text level="caption">
          <Link path="/legal/terms" icon={<FileText size={12} />} iconEnd>
            {t('links.terms')}
          </Link>
        </Text>
        <Text level="caption">
          <Link path="/legal/legal-notice" icon={<Building size={12} />} iconEnd>
            {t('links.legalNotice')}
          </Link>
        </Text>
      </Stack>

      <Text level="caption">
        {t('copyright.text', { year })}{' '}
        <Link path="https://ambroise-park.com" target="_blank">{t('copyright.company')}</Link>
        . {t('copyright.rights')}
      </Text>
    </Section>
  );
}
